import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, within, cleanup } from '@testing-library/react';
import App from './App';

function getList () {
    return screen.getAllByTestId('rocket-list')
        .map((item) => ({
            name: within(item).getByTestId('rocket-name').textContent,
            checkBox: within(item).getByTestId('checkBox')
        }));
}

describe("Check each element on the page if it exist", () => {
    afterEach(cleanup);
    test('Render Application without any errors', async () => {
        render(<App />);
        expect(screen.getByText(/Loading/)).toBeInTheDocument();

        await waitFor(() => {
        expect(screen.getByText(/Mission List/)).toBeInTheDocument();
        });
        
    });

     test('Render Application Header without any errors', async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/SensorFact/)).toBeInTheDocument();
        });
        
    });

     test('Render Application Footer without any errors', async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/Space X Program 2022/)).toBeInTheDocument();
        });
        
    });

    test('Launch Component should display a list of rockets.', async () => {
    render(<App />);
        const rocket_test= "AsiaSat 6"
        // function getList () {
        //     return screen.getAllByTestId('rocket-list')
        //         .map((item) => ({
        //             name: within(item).getByTestId('rocket-name').textContent,
        //             checkBox: within(item).getByTestId('checkBox')
        //         }));
        // }
        await waitFor(() => {
            expect(getList().find((rocket) => rocket.name === rocket_test)).toBeTruthy();
        });
    });


    test('Calculate Energy Consumption is rendered on screen', async () => {
        render(<App />);
        expect(screen.getByText(/Calculate Energy Consumption/)).toBeInTheDocument();
        expect(screen.getByLabelText('Calculate Energy Consumption')).toBeInTheDocument();
    }); 

    
    describe("Check each element on the page if it works as expected", () => {
        test('Sort should display selection when clicked', async () => {
            render(<App />);
            const dropdownButtonEl = screen.getByTestId('sortbtn');
            const dropdownContentEl = screen.getByTestId('sort-content');
            
            await userEvent.click(dropdownButtonEl)
            await waitFor(() => {
                expect(dropdownContentEl).toBeInTheDocument();
            });
        });

        test('search input should change', async () => {
            render(<App />);
            const searchInputEl = screen.getByPlaceholderText('Search...') as HTMLInputElement;
            const testValue = "ABS-2A";
            userEvent.type(searchInputEl, testValue)
            await waitFor(() => {
                expect(searchInputEl.value).toBe(testValue);
            });
        });
        test('When Calculate Energy Consumption button is clicked when no rocket is seleceted would display an error', async () => {

        });

    });
});


describe("Simulating a user entry", () => {
    afterEach(cleanup);
    it("Application renders", async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText(/SensorFact/)).toBeInTheDocument();
        });
    });

    test('The Launch Component should list down all rockets from graphQL', async () => {
        //add test
    });
    describe("User serches for specific Rocket luanch", () => {
        //add test
    });

    describe("User sorts out the Rocket luanch list", () => {
        //add test
    });


    describe("User is calculating for energy consumption", () => {
        it("selects a rocket from the list", async () => {
            render(<App />);
            await waitFor(() => {
                expect(screen.getByText(/SensorFact/)).toBeInTheDocument();
            });
            // let list = getList();
            // console.log(list, "check list")
        });
    });
});


// test('Simulating a user is calculating for energy consumption', async () => {

//     // render application
//     render(<App />);
//     function getList () {
//         return screen.getAllByTestId('rocket-list')
//             .map((item) => ({
//                 name: within(item).getByTestId('rocket-name').textContent,
//                 checkBox: within(item).getByTestId('checkBox')
//             }));
//     }
//     await waitFor(() => {
//       expect(screen.getByText(/SensorFact/)).toBeInTheDocument();
//     });

//     let list = getList();
//     console.log(list, "check list")
//     // await waitFor(() => {
//     //    list = getList()
//     // });
//     // const [ rocket ] = list;
//     // userEvent.click(rocket.checkBox);
//     // await waitFor(() => {
//     //     expect().toBeChecked();
//     // });
// });


