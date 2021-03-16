import React from 'react'

const InfoCard = () => {
    const isIncome = Math.round(Math.random());

    return (
        <div style={{ textAlign: 'center', padding: '0 10px' }}>
            Try Saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '$100 ' : '$40 '}
            in Category {isIncome ? 'Business ' : 'Travel '}
            for {isIncome ? 'Monday ' : 'Saturday '}
        </div>
    )
}

export default InfoCard
