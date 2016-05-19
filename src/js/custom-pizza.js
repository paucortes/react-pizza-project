/* global handleChange */;

var React = require("react");

var cheeses = [
  {
    name: 'mozzarella',
    displayName: 'Mozzarella cheese',
    price: 0
  },
  {
    name: 'parmesan',
    displayName: 'Parmesan cheese',
    price: 0
  },
  {
    name: 'feta',
    displayName: 'Feta cheese',
    price: 0
  },
  {
    name: 'provolone',
    displayName: 'Smoked provolone cheese',
    price: 0
  },
  {
    name: 'extra',
    displayName: 'Extra cheese',
    price: 0
  },
  {
    name: 'four-cheese',
    displayName: 'Four cheese mix',
    price: 0
  },
  {
    name: 'goat',
    displayName: 'Goat cheese',
    price: 0
  }
];

var meats = [
  {
    name: 'pepperoni',
    displayName: 'Pepperoni',
    price: 0
  },
  {
    name: 'buffalo-chicken',
    displayName: 'Buffalo chicken',
    price: 0
  },
  {
    name: 'bacon-strips',
    displayName: 'Bacon strips',
    price: 0
  },
  {
    name: 'ground-beef',
    displayName: 'Ground beef',
    price: 0
  },
  {
    name: 'salami',
    displayName: 'Salami',
    price: 0
  },
  {
    name: 'italian-sausage',
    displayName: 'Italian sausage',
    price: 0
  },
  {
    name: 'anchovies',
    displayName: 'Anchovies',
    price: 0
  },
  {
    name: 'steak-strips',
    displayName: 'Steak strips',
    price: 0
  }
];


var veggies = [
  {
    name: 'kalamata',
    displayName: 'Kalamata olives',
    price: 0
  },
  {
    name: 'mushrooms',
    displayName: 'Fresh mushrooms',
    price: 0
  },
  {
    name: 'garlic',
    displayName: 'Roasted garlic',
    price: 0
  },
  {
    name: 'onion',
    displayName: 'Red onions',
    price: 0
  },
  {
    name: 'tomatoes',
    displayName: 'Sun dried tomatoes',
    price: 0
  },
  {
    name: 'green-olives',
    displayName: 'Green olives',
    price: 0
  },
  {
    name: 'peppers',
    displayName: 'Roasted peppers',
    price: 0
  },
  {
    name: 'spinach',
    displayName: 'Spinach',
    price: 0
  }
];



// cheese toppings
var Cheese = React.createClass({
    render(){
        return(
            <li className = "list-group" >
                <div className = "list-group-item" >
                    <div className="input-group">
                        <span className="input-group-addon">
                            <input disabled={this.props.selectedElements.length > 3 && this.props.selectedElements.indexOf(this.props.name) === -1} checked={this.props.selectedElements.indexOf(this.props.name) > -1} onChange={this.props.handleSelection} type="checkbox" aria-label="text" name={this.props.name}></input>
                        </span>
                            <input type="text" className="form-control" aria-label="text" value={this.props.display}></input>
                    </div>
                </div>
            </li>);
    }
});

var CheeseToppings = React.createClass({
    render(){
        var that=this;
        return (
            <ul className="cheeses">
                {cheeses.map(function(cheese, i){
                    return <Cheese key={cheese.name + i} pic={cheese.pic} name={cheese.name} price={cheese.price} display={cheese.displayName} handleSelection={that.props.handleSelection} selectedElements={that.props.selectedElements}/>;
                })}
            </ul>
            );
    }
});

// meat toppings
var Meats = React.createClass({
    onSubmitOrder(data){
        
        
        //rederect with the right info
    },
    render(){
        return(
            <li className = "list-group" >
                <div className = "list-group-item" >
                    <div className="input-group">
                        <span className="input-group-addon">
                            <input disabled={this.props.selectedElements.length > 3 && this.props.selectedElements.indexOf(this.props.name) === -1} checked={this.props.selectedElements.indexOf(this.props.name) > -1} onChange={this.props.handleSelection} type="checkbox" aria-label="text" name={this.props.name}></input>
                        </span>
                            <input type="text" className="form-control" aria-label="text" value={this.props.display}></input>
                    </div>
                </div>
            </li>);
    }
});

var MeatToppings = React.createClass({
    render(){
        var that=this;
        return (
            <ul className="meats">
                {meats.map(function(meat, i){
                    return <Meats key={meat.name + i} pic={meat.pic} name={meat.name} price={meat.price} display={meat.displayName} handleSelection={that.props.handleSelection} selectedElements={that.props.selectedElements}/>;
                })}
            </ul>
            );
    }
});

// veggies toppings
var Veggie = React.createClass({
    onSubmitOrder(data){
        
        
        //rederect with the right info
    },
    render(){
        return(
            <li className = "list-group" >
                <div className = "list-group-item" >
                    <div className="input-group">
                        <span className="input-group-addon">
                            <input disabled={this.props.selectedElements.length > 3 && this.props.selectedElements.indexOf(this.props.name) === -1} checked={this.props.selectedElements.indexOf(this.props.name) > -1} onChange={this.props.handleSelection} type="checkbox" aria-label="text" name={this.props.name}></input>
                        </span>
                            <input type="text" className="form-control" aria-label="text" value={this.props.display}></input>
                    </div>
                </div>
            </li>);
    }
});

var VeggieToppings = React.createClass({
    render(){
        var that=this;
        return (
            <ul className="veggies">
                {veggies.map(function(veggie, i){
                    return <Veggie key={veggie.name + i} pic={veggie.pic} name={veggie.name} price={veggie.price} display={veggie.displayName} handleSelection={that.props.handleSelection} selectedElements={that.props.selectedElements}/>;
                })}
            </ul>
            );
    }
});






module.exports =  {
    VeggieToppings: VeggieToppings,
    MeatToppings: MeatToppings,
    CheeseToppings: CheeseToppings
};