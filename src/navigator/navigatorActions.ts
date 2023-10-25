// Dependencies
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

/**
 * Navigate to a specific screen in the app.
 * @param {string} name - The name of the screen to navigate to.
 * @param {object} params - The parameters to pass to the screen.
 */
export function navigate(name: string, params: object = {}): void {
  try {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  } catch (e) {
    console.error(e);
  }
}

/**
 * Go back to the previous screen in the app.
 * @returns {void}
 */
export function goBack(): void {
  try {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  } catch (e) {
    console.error(e);
  }
}
