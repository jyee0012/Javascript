class LoanForm extends React.Component {
    constructor(props){
        super(props);
        // bind handlers/methods

        // set state
    }
    handleSubmit(evt){
        evt.preventDefault();
        console.log(`Submit...`);
    }
    handleReset(){
        console.log(`Ya clicked da booton!`);
    }
    render() {
        return(
            <div>
                <h3>Loan Entry</h3>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="loan-title" placeholder="title"/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input type="number" className="form-control" id="loan-principal" placeholder="principal" aria-label="Amount (to the nearest dollar)" step="1"/>
                        <span className="input-group-addon">.00</span>
                    </div>
                    <div className="input-group">
                        <input type="number" step=".01" className="form-control" id="loan-rate" placeholder="rate" aria-label="Rate (as a percent)"/>
                        <span className="input-group-addon">%</span>
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" id="loan-term" placeholder="term"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="loan-payment">Payment</label>
                        <span className="loan-payment" id="loan-payment">$0.00</span>
                        <label htmlFor="loan-cost">Cost</label>
                        <span className="loan-cost  " id="loan-cost">$0.00</span>
                    </div>
                    <button onClick={this.handleSubmit} type="submit"className="btn btn-default">Add</button>
                    <button onClick={this.handleReset} type="reset" className="btn btn-info">Clear</button>
                </form>
            </div>
        );
    }
}
export default LoanForm;