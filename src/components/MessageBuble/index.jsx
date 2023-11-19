import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const MessageBubble = ({ message, isMyMessage }) => {
  return (
    <View style={{ alignItems: isMyMessage ? 'flex-end' : 'flex-start', margin: 5 }}>
      <View
        style={{
          backgroundColor: isMyMessage ? '#DCF8C5' : '#E2E2E2',
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text>{message}</Text>
      </View>
    </View>
  );
};
