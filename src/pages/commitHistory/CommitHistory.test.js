import { render, screen} from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import * as service from '../../common/util/httpService';
import CommitHistory from './commitHistory';
import { mock_commit_history } from '../../common/util/mock_data';


it('Page should show refresh button', async()=>{
    service.getCommits = jest.fn().mockResolvedValue([])
    render(<CommitHistory />);
    expect(await screen.findByRole('button', {name: 'Refresh'})).toBeInTheDocument();
})


it('Page should show commit history', async()=>{
    service.getCommits = jest.fn().mockResolvedValue(mock_commit_history)
    render(<CommitHistory />);
    expect(await screen.findByText(/commit message xyz/i)).toBeInTheDocument();
})


it('Page should refresh commit history', async()=>{
    service.getCommits = jest.fn().mockResolvedValue(mock_commit_history)
    render(<CommitHistory />);
    
    const refreshBtn = screen.getByRole("button", { name: "Refresh" });
    fireEvent.click(refreshBtn);
    
    expect(await screen.findByText(/commit message xyz/i)).toBeInTheDocument();
})