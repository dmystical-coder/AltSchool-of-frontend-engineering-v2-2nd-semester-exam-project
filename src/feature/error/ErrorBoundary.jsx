import React from "react";
import { Card } from "flowbite-react";


class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="grid h-screen px-4 place-content-center md:w-screen">
                    <Card className="p-4 text-center">
                        <h1 className="font-black text-indigo-600 text-6xl md:9xl">An Error has Occured!</h1>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;