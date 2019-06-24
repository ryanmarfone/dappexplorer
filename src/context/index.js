import React from 'react';

const AppContext = React.createContext();

export class Provider extends React.Component {
    state = {
        username: 'Disclaimer: This dapp is under construction...'
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export const Consumer = AppContext.Consumer;