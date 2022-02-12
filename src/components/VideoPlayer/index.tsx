import React, { FC, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoPlayer: FC = () => {
  const video: any = React.useRef(null);
  const [status, setStatus] = useState<any>({});
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
      }}
      useNativeControls={true}
      resizeMode="contain"
      isLooping={true}
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex'
  },
  video: {
    height: 200
  }
});

export default VideoPlayer;
