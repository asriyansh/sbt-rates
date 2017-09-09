
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import * as utils from '../../utils';

import Item from './ratesDetailsHistoryItem';

class HistoryGraphs extends React.Component {
    componentDidUpdate() {
        // Rates.initDatepicker(this.refs.filterDatepickerDetailsFrom);
        // Rates.initDatepicker(this.refs.filterDatepickerDetailsTo);
    }
    render() {

        let { dict, data, printSection, mode, ratesType } = this.props;

        return (
            <div className="rates-details-graphs">
                {utils.getCodes(data, 'ratesDated').map(code => {
                    let item = data[code];

                    // important to use 'code' here as a key, so that div with a graph could be properly removed
                    return (
                        <div
                            className={`details-item${printSection === code ? ' print-visible' : ''}`}
                            key={code}
                        >
                            <h2 className={(mode === 'converter' && !printSection) ? 'collapse' : ''}>
                                {item.name}
                            </h2>
                            <Item item={item} code={code}/>
                        </div>
                    )

                })}
            </div>
        )
    }
}

export default connect(
    state => ({
        dict: state.settings.dict,
        data: state.data,
        printSection: state.printSection,
        mode: state.settings.mode,
        ratesType: state.ratesType,
    })
)(HistoryGraphs);