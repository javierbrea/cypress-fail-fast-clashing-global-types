import cypressFailFast from 'cypress-fail-fast/plugin';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export const addPlugin: Cypress.PluginConfig = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    cypressFailFast(on, config);

    return config;
};
