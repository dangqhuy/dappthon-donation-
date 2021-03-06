import * as React from 'react'
import Event from '../components/Event'
import { API_URL } from '../config'
import { Link } from 'react-router-dom'


class Events extends React.Component {

  state = {
    groups: [],
    loading: true,
  };


  fetchEvent = () => {
    fetch(`${API_URL}/api/v1/groups/1`)
      .then(resp => resp.json())
      .then(groups => {
        this.setState({ groups, loading: false })
      })
  }

  componentDidMount() {
    this.fetchEvent();
  }

  handleEvent = event => {
    alert("add");
  }

  render() {
    const { groups, loading } = this.state
    const name = groups.name
    const description = groups.description
    if (loading) {
      return (
        <h1>LOADING...</h1>
      )
    }
    return (

      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Events</h3>
          </div>
          <div className="table-responsive">
            <table className="table card-table table-vcenter text-nowrap">
              <thead>
                <tr>
                  <th className="w-1">{this.state.groups.id}</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Created</th>
                  <th>Expire</th>
                  <th>Status</th>
                  <th>Target</th>
                  <th>Balance</th>
                  <th></th>
                </tr>
              </thead>
              <React.Fragment>

                {this.state.groups.events.map(g => {
                  return (
                    <Event key={g.id} name={g.title} requestKey={g.id} company={name} onClick={() => handleEvent()} created={g.created}
                      expire='20-11-2018' status={g.status} target={10000} balance={800} />
                  )
                })}

              </React.Fragment>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Events;  