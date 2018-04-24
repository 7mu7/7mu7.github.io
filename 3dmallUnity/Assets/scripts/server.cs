using UnityEngine;
using System.Collections;

public class server : MonoBehaviour {

	void PlayerHit(ControllerColliderHit hit){
		Application.OpenURL("servers.htm");
	}
}