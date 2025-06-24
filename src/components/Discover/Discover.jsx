import * as SC from "./DiscoverStyled"

const Discover = () => {
    return ( 
        <SC.DiscoverConStyled id="discover">
            <ul>
                <SC.DiscoverItem>
                    <h3>$89,914</h3>
                    <p>
                        of $100,000 backed
                    </p>
                </SC.DiscoverItem>
                <SC.DiscoverItem>
                    <h3>5,007</h3>
                    <p>total backers</p>
                </SC.DiscoverItem>
                <SC.DiscoverItem>
                    <h3>56</h3>
                    <p>days left</p>
                </SC.DiscoverItem>
            </ul>
            <SC.DiscoverScale></SC.DiscoverScale>
        </SC.DiscoverConStyled>
     );
}
 
export default Discover;