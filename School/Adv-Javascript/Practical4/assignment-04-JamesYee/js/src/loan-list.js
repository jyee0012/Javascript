// LoanList Component

class LoanList extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(evt){
        console.log(`Click da button......${evt.target.dataset.idx}`);
    }
    handleChange(){
        this.forceUpdate();
    }
    componentDidMount() {
        this.props.loans.on('change', this.handleChange);
    }

    render(loan) {
        // <button type="button" class="list-group-item" data-idx="{{idx}}">{{title}}</button> 
        let loanListBtn;
        if (this.props.loans.length === 0) {
            loanListBtn = <button type="button" className="list-group-item">No Loans Entered</button>; 
        }else{
            // loanListBtn = <button key={idx} onClick={this.handleClick} type="button" className="list-group-item" data-idx={idx}>{loan.get('title')}</button>
            return (
                <div>
                    <h3>Loan List</h3>
                    <div className="list-group">
                        {this.props.loans.map((loan,idx) => 
                            <button key={idx} onClick={this.handleClick} type="button" className="list-group-item" data-idx={idx}>{loan.get('title')}</button>
                        )}
                    </div>
                </div>
            );
            
        }
        return (
            <div>
                <h3>Loan List</h3>
                <div className="list-group">
                    {loanListBtn}
                </div>
            </div>
        );
    }
}

export default LoanList;