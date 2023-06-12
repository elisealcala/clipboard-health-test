# Ticket Breakdown

## 1. Create New Table

In this ticket I would like to know the best way to associate the Agents table and the Facilities.

**Questions**
- What happens if an agent works for more than one facility?

**Acceptance Criteria**
- Create a new Table `FacilityAgents` that stores the Agent Database ID, the Facility ID, the Shift ID and the Custom ID by each Facility.

## 2. Modify Shift Table
- Associate each Shift with the new Table we created on the previous task

**Acceptance Criteria**
- Add a `customAgentId` row to each Shift that is the customId of the `FacilityAgents` table.


## 3. Test the CRUD methods for the new table


**Acceptance Criteria**
Eveytime I created a new Shift, a new `FacilityAgents` row is created with all the expected data.

## 4. Generate Reports

- Change the `getShiftsByFacility` function to also accept the `customId` of an Agent.
- Now the each Shift has the `customId` we search for that on the `FacilityAgents` and then found the Agent Data.

**Acceptance Criteria**
- The list of shifts is now fitered by Facility and also by Agent.
