// LoanList Component

class LoanList extends React.Component {
    render(loan) {
        // <button type="button" class="list-group-item" data-idx="{{idx}}">{{title}}</button> 
        let loanListBtn;
        if (this.props.loans.length === 0) {
            loanListBtn = <button type="button" className="list-group-item">No Loans Entered</button>;                    
        }else{
            this.props.loans.map((loan,idx) => {
                loanListBtn = <button key={idx} type="button" className="list-group-item" data-idx="{{idx}}">{loan.get('title')}</button>
            })
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