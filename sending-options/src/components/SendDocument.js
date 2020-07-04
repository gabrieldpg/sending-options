import React, { useState } from 'react';

function SendDocument() {

    // Declare state variables
    const [customerTitle, setCustomerTitle] = useState('');
    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [addressSuburb, setAddressSuburb] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressPostalCode, setAddressPostalCode] = useState('');
    const [nextStatementDate, setNextStatementDate] = useState('');
    const [consultantName, setConsultantName] = useState('');

    return (
    <div>
        <div>SendDocument page</div>

        <form>
            <label>Title: 
                <input type="text" name="CustomerTitle" value={ customerTitle } onChange={ event => setCustomerTitle(event.target.value) } /></label><br/>
            <label>First Name: 
                <input type="text" name="CustomerFirstName" value={ customerFirstName } onChange={ event => setCustomerFirstName(event.target.value) } /></label><br/>
            <label>Last Name: 
                <input type="text" name="CustomerLastName" value={ customerLastName } onChange={ event => setCustomerLastName(event.target.value) } /></label><br/>
            <label>Address (Line 1): 
                <input type="text" name="AddressLine1" value={ addressLine1 } onChange={ event => setAddressLine1(event.target.value) } /></label><br/>
            <label>Address (Line 2): 
                <input type="text" name="AddressLine2" value={ addressLine2 } onChange={ event => setAddressLine2(event.target.value) } /></label><br/>
            <label>Suburb: 
                <input type="text" name="AddressSuburb" value={ addressSuburb } onChange={ event => setAddressSuburb(event.target.value) } /></label><br/>
            <label>City: 
                <input type="text" name="AddressCity" value={ addressCity } onChange={ event => setAddressCity(event.target.value) } /></label><br/>
            <label>Postal Code: 
                <input type="number" name="AddressPostalCode" value={ addressPostalCode } onChange={ event => setAddressPostalCode(event.target.value) } /></label><br/>
            <label>Next Statement Date: 
                <input type="date" name="NextStatementDate" value={ nextStatementDate } onChange={ event => setNextStatementDate(event.target.value) } /></label><br/>
            <label>Rep Name: 
                <input type="text" name="ConsultantName" value={ consultantName } onChange={ event => setConsultantName(event.target.value) } /></label><br/>

            <input type="submit" value="Submit" />
        </form>

    </div>);
}

export default SendDocument;