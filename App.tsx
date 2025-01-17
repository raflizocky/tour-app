import React from 'react';
import {Navigation} from '@/helpers/Navigation';
import AppContent from './src/AppContent';
import {CopilotProvider} from 'react-native-copilot';
import {BBSvgPath} from '@/helpers/svgMaskPaths';
import {BBTooltipComponent} from '@/helpers/TooltipComponent';

const App = () => {
  return (
    <CopilotProvider
      svgMaskPath={BBSvgPath}
      tooltipComponent={BBTooltipComponent}
      overlay="svg"
      animated={true}
      verticalOffset={35}
      stepNumberComponent={() => null}
      tooltipStyle={{
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 35,
      }}>
      <Navigation />
      <AppContent />
    </CopilotProvider>
  );
};

export default App;
