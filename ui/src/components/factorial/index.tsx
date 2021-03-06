import React, { useState } from 'react';
import { Layout } from '../shared/layout';
import Calculate from '../shared/calculate';

export const Factorial = () => {
    const [value, setValue] = useState('')
    return (
        <Layout pageId="factorial">
            <div>                
                <label htmlFor="factorial_input">Input a number to calculate its factorial</label><br />
                <input type="text" pattern="^0*[1-9]|10$" id="factorial_input" placeholder="1~10"
                    onChange={evt => evt.target.validity.valid ? setValue(evt.target.value) : setValue('-1')}/>
                <Calculate pageId="factorial" inputNum={value}></Calculate>
            </div>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
        </Layout>
    );
};