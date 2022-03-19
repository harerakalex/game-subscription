import React, { FC, useState } from 'react';
import { Alert, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import CustomAlert from '../../components/CustomAlert';
import Background from '../../components/reusable/Background';
import Button from '../../components/reusable/Button';
import InputBox from '../../components/reusable/InputBox';
import { Text } from '../../components/reusable/styled';
import { Container, CopyableRow, KeyboardStyles, QRCodeContainer, QRCodeImage } from './styles';
import Loader from '../../components/reusable/Loader';
import { theme } from '../../theme';
import { QR_CODE_URL } from '../../constants/environment';
import { IPaymentPayload } from '../../redux/interfaces/payment.interface';
import { postRequest } from '../../utils';
import { RootState } from '../../redux';

const PaymentScreen: FC = () => {
  const [price_amount, setPriceAmount] = useState<string>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState<any>();

  const { user } = useSelector((state: RootState) => state.users);

  const savePayment = async (payment: IPaymentPayload) => {
    return await postRequest('/payment', payment);
  };

  const handlePayment = async () => {
    if (!price_amount) {
      setError({ message: 'Price is required' });
      return;
    }

    if (price_amount && parseFloat(price_amount) < 50) {
      setError({ message: 'Price should be atleast 50 usd' });
      return;
    }

    try {
      setLoading(true);
      const payload: IPaymentPayload = {
        userId: user?.id as number,
        amount: parseFloat(price_amount)
      };

      const createPayment = await savePayment(payload);
      const data = Array.isArray(createPayment) ? createPayment[0].data : createPayment.data;

      setLoading(false);
      setInvoice(data.bitcoin);
    } catch (err) {
      const error = Array.isArray(err) ? err[0] : err;
      const { data } = error.response;
      setError({ message: data ? data.message || data : 'Something went wrong' });
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (invoice) Clipboard.setString(invoice.address);

    Alert.alert('Copied to clipboard', '', [{ text: 'OK' }]);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Background>
      {invoice ? (
        <Container>
          <Text size={17} marginBottom={30} marginTop={15}>
            Pay exactly {price_amount} <Text textTransform="uppercase">USD</Text>. Copy address or
            scan the QR code to process payment.
          </Text>
          <CopyableRow>
            <Text color={theme.colors.white} weight="bold">
              {invoice.address}
            </Text>
            <TouchableOpacity onPress={copyToClipboard}>
              <FontAwesome name="copy" size={24} color={theme.colors.white} />
            </TouchableOpacity>
          </CopyableRow>
          <QRCodeContainer>
            <QRCodeImage
              source={{
                uri: `${QR_CODE_URL}&chl=${invoice.address}`
              }}
            />
          </QRCodeContainer>
        </Container>
      ) : (
        <KeyboardAvoidingView behavior={'height'} enabled style={KeyboardStyles}>
          <Container>
            <Text size={20} marginBottom={30} marginTop={30}>
              Deposit at least 50 USD in order to start advertsing games.
            </Text>

            {error ? <CustomAlert message={error.message} type="error" /> : null}

            <InputBox
              keyboardType="numeric"
              value={price_amount}
              onChangeText={price_amount => setPriceAmount(price_amount)}
              placeholder="Amount in USD"
            />
            <Button
              label="Proceed to Payment"
              pressHandler={handlePayment}
              bgColor={'blue'}
              marginTop="30px"
            />
          </Container>
        </KeyboardAvoidingView>
      )}
    </Background>
  );
};

export default PaymentScreen;
