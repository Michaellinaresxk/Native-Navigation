import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {StackActions, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings: </Text>

      <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Regresar al home"
        onPress={() => navigator.dispatch(StackActions.popToTop)}
      />
    </View>
  );
};
