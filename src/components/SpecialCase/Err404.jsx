import { useRouteError } from 'react-router-dom';

function Err404() {
    const error = useRouteError();

    return (
        <div role="alert">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText ? `Error: ${error.statusText}` : "An unexpected error occurred."}</i>
            </p>
            {/* For development, show more detailed info (conditionally) */}
            {process.env.NODE_ENV === 'development' && error?.stack && (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    <summary>View Error Details</summary>
                    {error.stack}
                </details>
            )}
        </div>
    );
}

export default Err404;