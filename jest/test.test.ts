import { describe, expect } from '@jest/globals'

import { addPlugin } from "../src/add-plugin";

describe('addPlugin method', () => {
    it('should exist', () => {
        expect(addPlugin).toBeDefined();
    });
});
