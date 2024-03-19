import {test, expect} from '@playwright/test'
import { Validation } from "../../../../../src/pokemon/infrastructure/utils/validation"

test.describe('Testing at validation util',()=>{
    test('Should return true width valid uuid format',()=>{
        const validUuid = '998e0e3a-1909-46cc-b101-eb1e44e7f808';
        expect(Validation.isUUID(validUuid)).toBeTruthy();
    })
    test('Should return false width invalid uuid format',()=>{
        const validUuid = 'pidgeotto';
        expect(Validation.isUUID(validUuid)).toBeFalsy();
    })
})