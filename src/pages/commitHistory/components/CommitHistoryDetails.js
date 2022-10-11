import CardComp from "../../../common/components/CardComp"
import TextComp from "../../../common/components/TextComp"

function CommitHistoryDetails({commitList}) {

    const formatDate = (dateObj) => {
        const date = new Date(dateObj)
        const month = date.toLocaleString('default', { month: 'long' });
        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return `${month} ${date.getDate()}, ${time}, ${date.getFullYear()}`;
    }

    const formateCommitterName = (name) =>{
        return `By ${name}`
    }
  return (
    <div className='mt-2'>
        {
            
            commitList.map((commit, index) => (
                <CardComp key={index}>
                    <TextComp text={commit.message} font_weight={500} font_size='18px' font_color='black'></TextComp>
                    <div style={{display:'flex'}} className="mt-1">
                        <TextComp text={formatDate(commit.author.date)} />
                        <TextComp text={formateCommitterName(commit.author.name)} font_weight={500} mx={5}/>
                    </div>
                </CardComp>
            ))
        
        }
    </div>
  )
}

export default CommitHistoryDetails