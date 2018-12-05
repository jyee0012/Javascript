import Loan from "./loan.js";

class LoanForm extends React.Component {
    constructor(props){
        super(props);
        // this.state = {value: ''};
        // bind handlers/methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // set state
        if (this.props.loan){
            this.state = {
                title: this.props.loan.title,
                principal: this.props.loan.principal,
                rate: this.props.loan.rate * 100,
                term: this.props.loan.term,
                payment: this.props.loan.payment(),
                cost: this.props.loan.cost(),
                currentLoan: this.props.loan,
                addText: "Update"
            }
        }else{
            this.state = {
                title: '',
                principal: 0.00,
                rate: 0.00,
                term: 0,
                payment: 0,
                cost: 0,
                currentLoan: false,
                addText: "Add"
            }
        }
    }
    handleSubmit(evt){
        evt.preventDefault();
        console.log(`Submit...`);
        if (!this.state.currentLoan) {
            this.state.currentLoan = new Loan();
            this.props.submitListener(this.state.currentLoan);
        }
        this.state.currentLoan.set('title', this.state.title);
        this.state.currentLoan.set('principal', +this.state.principal);
        this.state.currentLoan.set('rate', +this.state.rate / 100);
        this.state.currentLoan.set('term', +this.state.term);
        this.setState({
            payment: this.state.currentLoan.payment(),
            cost: this.state.currentLoan.cost(),
            addText: "Update"
        })
    }
    handleReset(){
        console.log(`Ya clicked da reset booton!`);
        
        this.setState({
            title: '',
            principal: 0.00,
            rate: 0.00,
            term: 0,
            payment: 0,
            cost: 0,
            currentLoan: false,
            addText: "Add"
        })
    }
    handleChange(evt){
        console.log(`YAAAAA changed ${evt.target.id}`);
        let obj = {};
        obj[evt.target.getAttribute('name')] = evt.target.value;
        this.setState(obj);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loan){
            this.setState({
                title: nextProps.loan.title,
                principal: nextProps.loan.principal,
                rate: nextProps.loan.rate * 100,
                term: nextProps.loan.term,
                payment: nextProps.loan.payment(),
                cost: nextProps.loan.cost(),
                currentLoan: nextProps.loan,
                addText: "Update"
            });
        }
    }
    render() {
        return(
            <div>
                <h3>Loan Entry</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="loan-title" placeholder="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input type="number" className="form-control" id="loan-principal" placeholder="principal" name="principal" aria-label="Amount (to the nearest dollar)" step="1" value={this.state.principal} onChange={this.handleChange}/>
                        <span className="input-group-addon">.00</span>
                    </div>
                    <div className="input-group">
                        <input type="number" step=".01" className="form-control" id="loan-rate" placeholder="rate" name="rate" aria-label="Rate (as a percent)" value={this.state.rate} onChange={this.handleChange}/>
                        <span className="input-group-addon">%</span>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="loan-term" placeholder="term" name="term" value={this.state.term} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="loan-payment">Payment:</label>
                        <span className="loan-payment" id="loan-payment"> ${this.state.payment} </span>
                        <label htmlFor="loan-cost">Cost:</label>
                        <span className="loan-cost  " id="loan-cost"> ${this.state.cost} </span>
                    </div>
                    <button onClick={this.handleSubmit} type="submit"className="btn btn-default">{this.state.addText}</button>
                    <span>  </span>
                    <button onClick={this.handleReset} type="reset" className="btn btn-info">Clear</button>
                </form>
            </div>
        );
    }
}
export default LoanForm;