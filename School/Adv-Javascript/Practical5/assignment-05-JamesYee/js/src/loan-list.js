class LoanList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange() {
        console.log('Changed, now rendering');
        this.forceUpdate();
    }

    handleClick(evt) {
        console.log(`Clicked... ${evt.target.dataset.idx}`);
        this.props.clickListener(evt.target.dataset.idx);
    }

    componentDidMount() {
        this.props.loans.on('change', this.handleChange);
    }

    render() {
        if (this.props.loans && this.props.loans.length === 0)
        {
            return (
                <div>
                    <h3>Loan List</h3>
                    <div className="list-group">
                        <button type="button" className="list-group-item">No Loans Entered</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>Loan List</h3>
                    <div className="list-group">
                        {loans.map((loan, idx) => 
                            <button key={idx} data-idx={idx} type="button" className="list-group-item" onClick={this.handleClick}>
                                {loan.get('title')}
                            </button>
                        )}
                    </div>
                </div>
            )
        }
    }
};

export default LoanList;