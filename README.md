# Props

- Props drilling is a method to pass data from paren to children.
- The limitation is that it is unidirectional. That means it only passes the data form parent to child component. But it cannot pass the data from child to parent.

# MVP - Minimum Viable Product.

A minimum viable product, or MVP, is a product with enough features to attract early-adopter customers and validate a product idea early in the product development cycle.

# Default Export

```
export default ComponentName;
import ComponentName from './FilePath'
```

# Class component with sate

```
import React, {Component} from 'react';

class Counter extends Component {
    // Initialize state as a class property

    state = {
        count: 0;
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default Counter;
```
