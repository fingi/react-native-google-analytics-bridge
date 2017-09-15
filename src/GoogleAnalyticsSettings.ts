import { GoogleAnalyticsSettings as GoogleAnalyticsSettingsBridge } from "./NativeBridges";

/**
 * Google analytics settings shared across all GoogleAnalyticsTracker instances.
 */
export default class GoogleAnalyticsSettings {
  /**
   * Sets if OptOut is active and disables Google Analytics
   * This has to be set each time the App starts
   * @param {Boolean} enabled
   */
  static setOptOut(enabled: boolean): void {
    GoogleAnalyticsSettingsBridge.setOptOut(enabled);
  }

  /**
   * Sets the trackers dispatch interval
   * This will influence how often batches of events, screen views, etc
   * are sent to your tracker.
   * @param {Number} intervalInSeconds
   */
  static setDispatchInterval(intervalInSeconds: number): void {
    GoogleAnalyticsSettingsBridge.setDispatchInterval(intervalInSeconds);
  }

  /**
   * Sets if the tracker should have dry run enabled.
   * If dry run is enabled, no analytics data will be sent to your tracker.
   * @param {Boolean} enabled
   */
  static setDryRun(enabled: boolean): void {
    GoogleAnalyticsSettingsBridge.setDryRun(enabled);
  }
}