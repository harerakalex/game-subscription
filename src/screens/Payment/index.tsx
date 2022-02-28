import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { KeyboardAvoidingView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Clipboard from 'expo-clipboard';

import CustomAlert from '../../components/CustomAlert';
import Background from '../../components/reusable/Background';
import Button from '../../components/reusable/Button';
import InputBox from '../../components/reusable/InputBox';
import { Text } from '../../components/reusable/styled';
import { Container, KeyboardStyles } from './styles';
import { IInvoiceReturn } from '../../redux/interfaces/paynow.interface';
import Loader from '../../components/reusable/Loader';
import { theme } from '../../theme';

const PaymentScreen: FC = () => {
  const [price_amount, setPriceAmount] = useState<number>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState<IInvoiceReturn>();
  const [copiedText, setCopiedText] = React.useState('');

  const handlePayment = async () => {
    if (!price_amount) {
      setError({ message: 'Price is required' });
      return;
    }

    if (price_amount && price_amount < 50) {
      setError({ message: 'Price should be atleast 50 usd' });
      return;
    }

    try {
      setLoading(true);
      const data = await axios.post(
        'https://api.nowpayments.io/v1/invoice',
        {
          price_amount: price_amount,
          price_currency: 'usd'
        },
        {
          headers: {
            'x-api-key': 'RVQG3YN-QNPMKYS-H7QFNS2-QPDT50D',
            'Content-Type': 'application/json'
          }
        }
      );
      const result: IInvoiceReturn = Array.isArray(data) ? data[0].data : data.data;
      setLoading(false);
      setInvoice(result);
    } catch (err) {
      const error = Array.isArray(err) ? err[0] : err;
      const { data } = error.response;
      setError({ message: data ? data.message || data : 'Something went wrong' });
      setLoading(false);
    }
  };

  const handleOpenWithWebBrowser = () => {
    if (invoice) WebBrowser.openBrowserAsync(invoice?.invoice_url);
  };

  const copyToClipboard = () => {
    if (invoice) Clipboard.setString(invoice?.invoice_url);
  };

  if (loading) {
    <Loader />;
  }

  return (
    <Background>
      {invoice ? (
        <Container>
          <Text size={17} marginBottom={20} marginTop={15}>
            Press the bellow link or button to complete payment and you can also copy the link to
            clipboard
          </Text>
          <Text>{copiedText}</Text>
          <Text
            textTransform="none"
            style={{ textDecorationColor: theme.colors.white, textDecorationLine: 'underline' }}
            size={17}
            marginBottom={20}
            marginTop={15}
            onPress={handleOpenWithWebBrowser}
          >
            {invoice.invoice_url}
          </Text>
          <Button
            bgColor="blue"
            label="Press here to preceed"
            pressHandler={handleOpenWithWebBrowser}
            marginTop="25px"
          />
          <Button
            label="Press here to copy to Clipboard"
            pressHandler={copyToClipboard}
            marginTop="25px"
          />
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
              value={price_amount ? price_amount.toString() : ''}
              onChangeText={price_amount => setPriceAmount(parseInt(price_amount))}
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
