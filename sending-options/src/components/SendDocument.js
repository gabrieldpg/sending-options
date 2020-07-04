import React, { Component } from 'react';

class SendDocument extends Component {
    render() {
        console.log(this.props.match.params);
        return (<div>SendDocument page</div>);
    }
}

export default SendDocument;


/*

<form>
    <label>
        Title:
        <input type="text" name="name" />
    </label>


    <input type="submit" value="Submit" />
</form>

<TodaysDate>

<CustomerTitle>
<CustomerFirstName>
<CustomerLastName>
<AddressLine1>
<AddressLine2>
<AddressSuburb>
<AddressCity>
<AddressPostalCode>
<NextStatementDate>
<ConsultantName>



*/