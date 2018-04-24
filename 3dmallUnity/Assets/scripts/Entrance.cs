using UnityEngine;
using System.Collections;

public class Entrance : MonoBehaviour {
	
	void PlayerHit(ControllerColliderHit hit){
		Application.OpenURL("mall.htm");
	}
}