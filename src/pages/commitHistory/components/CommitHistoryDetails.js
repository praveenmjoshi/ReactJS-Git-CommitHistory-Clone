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
            
            commitList.map((commitRec, index) => (
                <CardComp key={index}>
                    <a className="commit-msg-txt" href={commitRec.html_url} target="_blank" rel="noreferrer">{commitRec.commit?.message || ''}</a>
                    <div style={{display:'flex'}} className="mt-1">
                        <TextComp text={formatDate(commitRec.commit.author.date)} />
                        <TextComp text={formateCommitterName(commitRec.commit.author.name)} font_weight={500} mx={5}/>
                    </div>
                </CardComp>
            ))
        
        }
    </div>
  )
}

export default CommitHistoryDetails