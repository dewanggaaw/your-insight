import { all, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { setListTask } from "../Redux/taskAction";
import * as Navigation from "../../../Shared/Navigation/Nav";
import { Store } from "../../../Store/Store";

function* getTaskFromSaga() {
  try {
    const dataListTeam = Store.getState().teamReducer.teamList;
    const respond = yield axios.get(
      "https://whiteboard-team.herokuapp.com/card"
    );

    // const listIdTeaminCardThatHasBeenFiltered = respond.data.data
    //   .map((value) => value.teamId?._id)
    //   .filter((el) => el !== undefined);
    // const listIdTeam = dataListTeam.map((value) => value._id);
    // const filteredData = respond.data.data.filter((item) => {
    //   return !dataListTeam.includes(item.teamId?._id);
    // });

    // console.log(filteredData, "xxxxxfiltered");
    yield put(setListTask(respond.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* getDataCardSaga(payload, teamId) {
  try {
    const respond = yield axios.get(
      "http://whiteboard-team.herokuapp.com/card"
    );

    yield put(setListTask(filteredData));
    yield Navigation.navigate({
      name: "TeamBoardDetail",
      params: {
        _id: payload.payload._id,
        title: payload.payload.title,
        teamName: payload.payload.teamName,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export function* TaskSaga() {
  yield all([
    takeLatest("GET_LIST_TASK", getTaskFromSaga),
    takeLatest("GET_CARD_DATA", getDataCardSaga),
  ]);
}
