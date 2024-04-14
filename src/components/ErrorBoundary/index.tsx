import { Component, PropsWithChildren, ReactElement } from "react";
import Error from "../Error";

type Props = {
  fallback?: ReactElement;
} & PropsWithChildren;

type Info = {
  componentStack: string;
};

type State = {
  hasError: boolean;
  error: Error | null;
  info: Info | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: Info) {
    console.error(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (!hasError) return children;

    return (
      fallback ?? (
        <Error
          title='네트워크 오류입니다.'
          label='다시 시도'
          handleButtonClick={() => this.setState({ hasError: false })}
        />
      )
    );
  }
}
