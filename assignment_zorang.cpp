
#include <bits/stdc++.h>
using namespace std;

struct Coordinate {
    double latitude;
    double longitude;
};

double calculateDistance(const Coordinate& coord1, const Coordinate& coord2) {
    return sqrt(std::pow(coord1.latitude - coord2.latitude, 2) +
                     std::pow(coord1.longitude - coord2.longitude, 2));
}

vector<int> findOptimalRoute(const Coordinate& store, const vector<Coordinate>& addresses) {
    int n = addresses.size();
   vector<int> route;

 vector<bool> visited(n, false);

    route.push_back(0); // Start at the store

    for (int i = 0; i < n - 1; ++i) {
        int currentAddress = route.back();
        double minDistance = numeric_limits<double>::max();
        int nextAddress = -1;

        for (int j = 0; j < n; ++j) {
            if (!visited[j]) {
                double distance = calculateDistance(addresses[currentAddress], addresses[j]);
                if (distance < minDistance) {
                    minDistance = distance;
                    nextAddress = j;
                }
            }
        }

        visited[nextAddress] = true;
        route.push_back(nextAddress);
    }

    route.push_back(0); // Return to the store

    return route;
}

std::vector<std::vector<int>> assignAddressesToAgents(const std::vector<int>& optimalRoute, int numAgents) {
    int n = optimalRoute.size();
    int addressesPerAgent = n / numAgents;

  vector<std::vector<int>> agentRoutes(numAgents);

    for (int i = 0; i < numAgents; ++i) {
        for (int j = 0; j < addressesPerAgent; ++j) {
            int addressIndex = i * addressesPerAgent + j;
            agentRoutes[i].push_back(optimalRoute[addressIndex] + 1); // Adding 1 to address index for display
        }
    }

    for (int i = addressesPerAgent * numAgents; i < n; ++i) {
        agentRoutes.back().push_back(optimalRoute[i] + 1); // Adding 1 to address index for display
    }

    return agentRoutes;
}

int main() {
    // Coordinates for the store
    Coordinate store;
    store.latitude = 28.9428;
    store.longitude = 77.2276;

    // Coordinates for 100 addresses
     std::vector<Coordinate> addresses = {
        {77.26398177444935, 29.08908139212639},
        {77.2652468523133, 29.092540182173252},
        {77.26404986407397, 29.09916289150715},
        {77.26563535630703, 29.095355203949506},
        {77.26583819836377, 29.095966333768118},
        {77.26591865459652, 29.096030741930008},
        {77.26655669510365, 29.096778433551563},
        {77.26625794215028, 29.10057406872511},
        {77.26653425798689, 29.09987032413483},
        {77.26763392032183, 29.09902442246675},
        {77.26816771909714, 29.100369215011597},
        {77.26838428527117, 29.106186546794223},
        {77.26839568465948, 29.10613791918116},
        {77.26839568465948, 29.10613791918116},
        {77.2683805969933, 29.10623084753752},
        {77.26900588721037, 29.104451171249522},
        {77.27113638840338, 29.109589643776417},
        {77.05522680276044, 28.42167042195797},
        {78.0288378149, 27.1434745807},
        {78.0554456636, 27.1581814282},
        {80.93117639422417, 26.838514896886736},
        {73.86530748177277, 18.50923240184784},
        {72.83506723783144, 21.194217503070828},
        {72.8313768915411, 21.173333823680878},
        {84.09939866513014, 24.04220160698313},
        {84.54404924064875, 25.515784804698182},
        {85.05047530433829, 23.352146856486797},
        {85.05042222303217, 22.47985292226076},
        {86.97660762816668, 23.51162401401524},
        {47.86461110553439, 17.760396860539913},
        {45.83053924115291, 21.818511039018635},
        {39.230719330494054, 36.83638673275709},
        {39.230719330494054, 36.83638673275709},
        {35.7229859499076, 51.3818771392107},
        {31.765385760128474, 35.13460122048855},
        {34.144458671130096, 72.09338553249836},
        {34.139665017636545, 72.09170512855053},
        {30.048276616619038, 31.257372200489044},
        {33.66878794612444, 73.00006840378046},
        {33.64388599157803, 73.09087257832289},
        {33.64383379679333, 73.0908202752471},
        {33.64378188109373, 73.09081591665745},
        {33.634549320550285, 73.09619408100843},
        {33.517871148888894, 72.87231914699078},
        {33.01481109437303, 73.73526658862829},
        {32.64872430665188, 73.33715736865997},
        {32.48295697624009, 72.91242320090532},
        {32.48093109522745, 72.91209161281586},
        {32.7638266997, 74.8428532854},
        {32.7628017939, 74.8444502493},
        {32.760082, 74.837532},
        {32.758788, 74.847437},
        {32.7555441471, 74.8496761546},
        {32.7506722614, 74.8493418843},
        {32.7420613597, 74.81924247},
        {32.7462234, 74.8454447},
        {32.7485445, 74.8585121},
        {32.7415018592, 74.8203016073},
        {32.7437509, 74.8426261},
        {32.7432816854, 74.8578136756},
        {32.7432816854, 74.8578136756},
        {32.7428125667, 74.8578551112},
        {32.7428125667, 74.8578551112},
        {32.7428125667, 74.8578551112},
        {32.7428125667, 74.8578551112},
        {32.74307, 74.86004},
        {32.7354934932, 74.829938449},
        {32.7338418818, 74.8278872938},
        {32.7415949215, 74.870993346},
        {32.7396496167, 74.864856787},
        {32.7406888287, 74.8717064783},
        {32.738674, 74.8653551},
        {32.7379826218, 74.8635763675},
        {32.733540722316874, 74.84355971217155},
        {32.7376498396, 74.8677170277},
        {32.7377053974, 74.8712541908},
        {32.7355137991, 74.8709685355},
        {32.7317385171, 74.8665485904},
        {32.7293183153, 74.8691439629},
        {32.7264631204, 74.8598400503},
        {32.7233903626, 74.8576342687},
        {32.7087539626, 74.8641419783},
        {32.7058673, 74.8622451},
        {31.961006249510373, 70.6146340817213},
        {32.7057310942, 74.8729382828},
        {32.7049338185, 74.8720541596},
        {32.7049425643, 74.8721138388},
        {32.7017937356, 74.8603342474},
        {32.7017911964, 74.8604636639},
        {32.7017889394, 74.8605726287},
        {32.7005277968, 74.8538288847},
        {32.7025092216, 74.8671165481},
        {32.7013457076, 74.8617779464},
        {32.7008401217, 74.8591239005},
        {32.6997485079, 74.8626565265},
        {32.700267102, 74.8679507151},
        {32.6981801055, 74.8611114174},
        {32.6978824429, 74.861696139},
        {32.6974942103, 74.8615952209},
        {32.7029324164, 74.8970647529}
    };

    int numAgents = 10;

    vector<int> optimalRoute = findOptimalRoute(store, addresses);

   vector<std::vector<int>> agentRoutes = assignAddressesToAgents(optimalRoute, numAgents);
 cout <<"["<<endl;
    for (int i = 0; i < numAgents; ++i) {
      cout << "[";
        for (int j = 0; j < agentRoutes[i].size(); ++j) {
           cout << agentRoutes[i][j];
            if (j < agentRoutes[i].size() - 1) {
                cout << ", ";
            }
        }
        cout << "]" << endl;
    }
    cout <<"]";

    return 0;
}


// The algorithm aims to find the optimal routes for a group of delivery agents to deliver packages to various addresses and return to the store in the shortest amount of time. Here's a simplified explanation:

// Finding Optimal Route for a Single Agent:

// Start from the store's location.
// Choose the nearest address that hasn't been visited.
// Move to that address and repeat the process until all addresses are visited.
// Return to the store.
// Finding Optimal Routes for All Agents:

// Use the above approach to find the optimal route for a single agent.
// Divide the addresses among the agents evenly, ensuring each agent delivers roughly the same number of packages.
// Make sure no address is visited by more than one agent.
// Output Format:

// Provide the routes for each agent as a list of address IDs in the order they are visited.
// The algorithm optimizes the routes by selecting the nearest unvisited address at each step. The goal is to minimize the overall travel distance for all agents, making the delivery process efficient.