import * as React from 'react';
import { ModalProps, SafeAreaView, StyleSheet, Platform } from 'react-native';
import AnimatedModal from './AnimatedModal';
import { Modal } from './Modal';
import useTheme from './CountryTheme';
import { CountryModalContext } from './CountryModalProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const CountryModal = ({
  children,
  withModal,
  disableNativeModal,
  ...props
}: ModalProps & {
  children: React.ReactNode;
  withModal?: boolean;
  disableNativeModal?: boolean;
}) => {
  const { backgroundColor } = useTheme();
  const { teleport } = React.useContext(CountryModalContext);
  const content = React.useMemo(
    () => (
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        {children}
      </SafeAreaView>
    ),
    [backgroundColor, children],
  );
  React.useEffect(() => {
    if (disableNativeModal) {
      teleport!(<AnimatedModal {...props}>{content}</AnimatedModal>);
    }
  }, [disableNativeModal, content, props, teleport]);
  if (withModal) {
    if (Platform.OS === 'web') {
      return <Modal {...props}>{content}</Modal>;
    }
    if (disableNativeModal) {
      return null;
    }
    return <Modal {...props}>{content}</Modal>;
  }
  return content;
};

export default CountryModal;
