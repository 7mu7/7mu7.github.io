using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class arcade : MonoBehaviour {

	void PlayerHit(ControllerColliderHit hit){
		Application.OpenURL("arcade.htm");
	}
}
