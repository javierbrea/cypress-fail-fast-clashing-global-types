import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

export function addCommands() {
    addMatchImageSnapshotCommand({
        failureThreshold: 0.06, // threshold for entire image
        failureThresholdType: 'percent', // percent of image or number of pixels
        customDiffConfig: { threshold: 0.2 }, // threshold for each pixel
    });

    Cypress.Commands.overwrite('matchImageSnapshot', (originalFn, subject, name, options) => {
        // only take screenshots in headless browser
        if (Cypress.browser.isHeadless) {
            // return the original screenshot function
            return originalFn(subject, name, options);
        }

        return cy.log('No screenshot taken when headed');
    });
}
