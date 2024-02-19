import React from 'react'

function Card({data,isprogress}) {
  return<>{
  isprogress?<>
    {/* <!-- Earnings (Monthly) Card Example --> */}
    <div classNameName="col-xl-3 col-md-6 mb-4">
                            <div classNameName={`card border-left-${color} shadow h-100 py-2`}>
                                <div classNameName="card-body">
                                    <div classNameName="row no-gutters align-items-center">
                                        <div classNameName="col mr-2">
                                            <div classNameName="text-xs font-weight-bold text-info text-uppercase mb-1">{data.title}
                                            </div>
                                            <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{data.value}</div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className={`progress-bar bg-info" role="progressbar`}
                                                            style={{width:"50%",
                                                             ariaValueNow:"50",
                                                              ariaValueMin:"0",
                                                            ariaValueMax:"100"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas ${data.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  </>:<>
  {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className={`card border-left-${data.color} shadow h-100 py-2`}>
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className={`text-xs font-weight-bold text-${data.color} text-uppercase mb-1`}>
                                                {data.title}</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={`fas ${data.icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

  </>
}
  </>
    
}

export default Card