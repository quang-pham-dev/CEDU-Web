import React from 'react';
import { Helmet } from 'react-helmet';
import Title from 'components/Title';
import Meta from 'components/Meta';
import View from 'components/View';
import ViewBody from 'components/ViewBody';
import Text from 'components/Text';

export function DocumentPage() {
  return (
    <React.Fragment>
      <Helmet>
        <Title value="Document Page" />
        <Meta name="description" content="Document page of CEDU application" />
      </Helmet>
      <View>
        <ViewBody>
          <Text value="Hello Document Page" />
        </ViewBody>
      </View>
    </React.Fragment>
  );
}

export default DocumentPage;
