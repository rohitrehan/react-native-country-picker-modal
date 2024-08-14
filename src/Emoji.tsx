import React, { memo } from 'react';
import { Text } from 'react-native';
import * as nodeEmoji from 'node-emoji';

const Emoji = memo(({ name }: { name: string }) => {
  const emoji = nodeEmoji.get(name.toLowerCase());
  return (
    <Text aria-label={name} allowFontScaling={false}>
      {emoji}
    </Text>
  );
});

export default Emoji;
