const ACCOUNT_CLOSURE = 'Account Closures';
const AUTHORISED_PERSON_FORM = 'Authorised Person Form';
const AUTOMATIC_PAYMENT_FORM = 'Automatic Payment Form';
const BANK_ACCOUNT_DETAILS = 'Bank Account Details';
const CHANGE_OF_NAME = 'Change of Name';
const CREDIT_LIMIT_CONFIRMATION = 'Credit Limit Confirmation';
const DEALER_CANCELLATION_FORM = 'Dealer Cancellation Form';
const DIRECT_DEBIT_FORM = 'Direct Debit Form';
const DISPUTED_TRANSACTION_FORM = 'Disputed Transaction Form';
const FINAL_SETTLEMENT_FIGURE = 'Final Settlement Figure';
const PAYMENT_CONFIRMATION = 'Payment Confirmation';
const PURCHASE_CONFIRMATION = 'Purchase Confirmation';
const WSS_REGISTRATION = 'WSS Registration';

const TEST_FORM = 'Test Form';

// Array with all document options currently supported in 'Normal Form'
const OPTIONS = [ACCOUNT_CLOSURE, AUTHORISED_PERSON_FORM, AUTOMATIC_PAYMENT_FORM,
    BANK_ACCOUNT_DETAILS, CHANGE_OF_NAME, CREDIT_LIMIT_CONFIRMATION, DEALER_CANCELLATION_FORM,
    DIRECT_DEBIT_FORM, DISPUTED_TRANSACTION_FORM, FINAL_SETTLEMENT_FIGURE, PAYMENT_CONFIRMATION,
    PURCHASE_CONFIRMATION, WSS_REGISTRATION, TEST_FORM];

// Array with all document options currently supported in 'url-form' 
// (replace spaces with - and make it all lower case)
export const documentOptions = OPTIONS.map(option => {
    return {
        message: option,
        url: option.replace(/ /g, '-').toLowerCase()
    }
});