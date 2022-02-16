import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

export default function App() {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <p>
        <FormattedMessage
          description="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
    </IntlProvider>
  );
}
