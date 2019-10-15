using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class smash : MonoBehaviour {

	void PlayerHit(ControllerColliderHit hit){
		Application.OpenURL("smash.htm");
	}
}
