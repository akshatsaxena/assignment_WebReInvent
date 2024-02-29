import { useAuth } from "../authContext";

        const Dashboard: React.FC = () => {
          const {logout}=useAuth();
          const handleClicked=()=>{
            console.log("inside")
            logout();
          }
            return (
              <div className="flex h-screen bg-gray-100">
                
                <div className="flex flex-col w-64 bg-gray-800">
                  
                  <div className="flex items-center justify-center h-16 bg-gray-900 text-white text-lg font-semibold">
                    Dashboard
                  </div>
                  <div className="p-4">
                    <ul>
                      <li className="py-2 hover:bg-gray-700 text-white">Dashboard</li>
                      <li className="py-2 hover:bg-gray-700 text-white">Analytics</li>
                      <li className="py-2 hover:bg-gray-700 text-white">Reports</li>
                      <li className="py-2 hover:bg-gray-700 text-white">Settings</li>
                    </ul>
                  </div>
                </div>
                
              
                <div className="flex flex-col flex-1">
                  
                  <div className="flex item-center justify-between bg-white shadow">
                    <div className="px-4 py-2 flex-1">Logo</div>
                    <div className="flex item-center justify-around">
                    <div className="px-4 py-2">User Menu</div>
                    <button className="px-4 py-2 " onClick={handleClicked}>Log Out</button>
                    </div>
                  </div>
                  
               
                  <div className="p-4 flex-1">
                    <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia enim error consequuntur consectetur natus maxime? Deserunt voluptatibus optio iure at quo eligendi aliquam quibusdam odit magnam et, hic asperiores!</p>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Dashboard;
          
