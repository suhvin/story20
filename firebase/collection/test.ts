import { firestore } from "../my-base";
import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore";

export class TestCollection {
  /** CREATE */
  /**
   * @description user 컬렉션에 doc 생성
   * @param userId
   * @param userData
   * @returns 생성된 doc id
   */
  static createTest = async (userId: string, testData: any) => {
    const testCollectionRef = collection(firestore, "test");
    const newTestDocRef = doc(testCollectionRef, userId);
    await setDoc(newTestDocRef, testData);
    return userId;
  };

  /** READ */
  /**
   * @description 해당 유저 정보 조회
   * @param userId
   * @returns 해당 유저 정보
   */
  static readTest = async (userId: string) => {
    const testDocRef = doc(firestore, "test", userId);
    const docSnap = await getDoc(testDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    }
  };

  /** UPDATE */
  /**
   * @description 해당 유저의 user 컬렉션 특정 정보 업데이트
   * @param userId
   * @param updateData
   * @returns 없음
   */
  static updateTestFields = async (userId: string, updateData: any) => {
    const testDocRef = doc(firestore, "test", userId);
    const docSnap = await getDoc(testDocRef);
    if (docSnap.exists()) {
      await updateDoc(testDocRef, updateData);
    }
  };

  /** DELETE */
  /**
   * @description 탈퇴 시, 유저 정보 삭제
   * @param userId
   * @returns 없음
   */
  static deleteTest = async (userId: string) => {
    const testDocRef = doc(firestore, "test", userId);
    const docSnap = await getDoc(testDocRef);
    if (docSnap.exists()) {
      await deleteDoc(testDocRef);
    }
  };
}
