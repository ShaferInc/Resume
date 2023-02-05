import React from "react";

const OtherSkills = ({ resumeData }) => {
    return (
        <section id="otherskills">
            <div className="row otherskills">
                <div className="three columns header-col">
                    <h1><span>Other Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div style={{ columns: "2", columnGap: "1rem" }}>
                        {
                            resumeData.otherskills && resumeData.otherskills.map(item => (
                                <div>
                                    <h3>{item.skillname}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherSkills;