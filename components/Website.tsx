import * as React from "react";
import Iframe from "react-iframe";

export interface WebsiteProps {
    url: string;
    width: string;
    height: string;
}

const Website: React.SFC<WebsiteProps> = ({url, width, height}) => (
  <Iframe
    url={url}
    width={width}
    height={height}
    position="relative"
    className="website"
    styles={{ margin: '10px 0 0 7px', border:'1px solid #ddd', borderRadius: '4px', overflowX: 'hidden!important' }}
  />
);

export default Website;
