import Day from '../components/Day'

export default function Schedule() {
    return (
        <div>
            <h1 className="text-center">Schedule</h1>
            <Day day="Monday" sixAm="No-gi" sixPm="Gi"/>
            <Day day="Tuesday" sixAm="No-gi" sixPm="Gi"/>
            <Day day="Wednesday" sixAm="No-gi" sixPm="Gi"/>
            <Day day="Thursday" sixAm="No-gi" sixPm="Gi"/>
            <Day day="Friday" sixAm="No-gi" sixPm="Gi"/>
            <Day day="Saturday" sixAm="No-gi" sixPm="Gi"/>
        </div>
    )
}