import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useCopilot} from 'react-native-copilot';
import {styles} from './styles';

export const BBTooltipComponent = () => {
  const {isFirstStep, isLastStep, goToNext, goToPrev, stop, currentStep} =
    useCopilot();

  return (
    <View>
      <Text style={styles.tooltipTitleBB}>{currentStep?.name}</Text>
      <Text style={styles.tooltipTextBB}>{currentStep?.text}</Text>
      <View style={styles.buttonContainerBB}>
        {!isFirstStep && (
          <TouchableOpacity onPress={goToPrev} style={styles.buttonBB}>
            <Text style={styles.buttonTextBB}>Back</Text>
          </TouchableOpacity>
        )}
        {!isLastStep ? (
          <TouchableOpacity onPress={goToNext} style={styles.buttonBB}>
            <Text style={styles.buttonTextBB}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={stop} style={styles.buttonBB}>
            <Text style={styles.buttonTextBB}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
