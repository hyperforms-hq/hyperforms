import * as React from "react";

export interface PageTitleProps {
  title: string
}

export const PageTitle: React.FunctionComponent<PageTitleProps> = ({title}) => {
    return <h3 className="title is-3">{title}</h3>;
};
